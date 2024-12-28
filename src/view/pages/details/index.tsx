import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../components/container";
import { useDetails } from "../../hooks/useDetails";
import { DetailsInfo } from "./components/details-info";
import { DetailsHeader } from "./details-header";

export function Details() {
  const { id } = useParams();
  const { details, fetchDetails, loading } = useDetails();

  useEffect(() => {
    fetchDetails(id);
  }, [id]);
  return (
    <Container>
      <div className="flex flex-col gap-6">
        <DetailsHeader />
        <DetailsInfo isLoading={loading} details={details} />
      </div>
    </Container>
  );
}
