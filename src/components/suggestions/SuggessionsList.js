import SuggesstionCard from "./SuggesstionCard"

const SuggessionsList = ({suggestions, onDelete, onEdit}) => {

  const displaySuggestions = suggestions.map((suggestion) => (
    <SuggesstionCard key={suggestion.id} suggestion={suggestion} onDelete={onDelete} onEdit={onEdit}/>
  ))

  return (
    <div>
      {displaySuggestions}
    </div>
  )
}

export default SuggessionsList