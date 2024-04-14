import "./styles.css";
import { ReactSearch } from "@vectara/react-search";
import { useSearch } from "@vectara/react-search/lib/useSearch";

export default function App() {
  const { fetchSearchResults, isLoading } = useSearch("CUSTOMER_ID", "CORPUS_ID", "API_KEY");

  return (
    <div className="App">
      <h1>Material Support</h1>
      <h2>Choose and design your own needle</h2>

      <ReactSearch
        customerId="1866367850"
        corpusId="5"
        apiKey="zwt_bz6DahCpCW3mNHwmXpYDU2pwhfaHgYFB_tlPLg"
        placeholder="Ask me something" // This is a customizable placeholder
        isDeeplinkable={true} // Determines if search results will be deeplinked
        openResultsInNewTab={true} // Determines if links open in a new tab
        zIndex={5} // Z-index of the search modal
      />
    </div>    
  );
}
