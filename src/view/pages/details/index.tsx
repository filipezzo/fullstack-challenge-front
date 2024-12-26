import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../components/container";
import { DetailsInfo } from "./components/details-info";
import { DetailsHeader } from "./details-header";

export function Details() {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const fetchDetails = useCallback(async () => {
    if (!id) return;
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:3300/product/${id}`);
      if (!response.ok) {
        throw new Error("Erro ao buscar dados do produto");
      }
      const data = await response.json();
      setDetails(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchDetails();
  }, []);
  return (
    <Container>
      <div className="flex flex-col gap-6">
        <DetailsHeader />
        <DetailsInfo isLoading={loading} details={details} />
      </div>
    </Container>
  );
}
