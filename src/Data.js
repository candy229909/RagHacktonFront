import "./styles.css";
import { ReactSearch } from "@vectara/react-search";
import { useSearch } from "@vectara/react-search/lib/useSearch";

export default function Data() {
  const { fetchSearchResults, isLoading } = useSearch(
    "CUSTOMER_ID",
    "CORPUS_ID",
    "API_KEY",
  );

  return (
    <div className="App">
      <h1>Data</h1>
      <h2>Key word</h2>
      <li>probe card</li>
      <li>metal</li>
      <li>stress</li>

      <h2>website</h2>
      <li>arxiv</li>
      <li>freeLibrary</li>
      <li>IEEE</li>
      <li>https://www.researchgate.net/</li>
    </div>
  );
}
