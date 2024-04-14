import "./styles.css";
import { ReactSearch } from "@vectara/react-search";
import { useSearch } from "@vectara/react-search/lib/useSearch";

export default function Data() {
  const { fetchSearchResults, isLoading } = useSearch("CUSTOMER_ID", "CORPUS_ID", "API_KEY");

  return (
    <div className="App">
      <h1>Material Support</h1>
      <h2>Choose and design your own needle</h2>

      <ReactSearch
        customerId="CUSTOMER_ID"
        corpusId="CORPUS_ID"
        apiKey="API_KEY"
        placeholder="Ask me something" // This is a customizable placeholder
        isDeeplinkable={true} // Determines if search results will be deeplinked
        openResultsInNewTab={true} // Determines if links open in a new tab
        zIndex={5} // Z-index of the search modal
      />
    </div>    
  );
}