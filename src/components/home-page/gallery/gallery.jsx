import CollectionTile from "../collection-tile";

export default function CollectionsGallery({ items = [] }) {
  return (
    <ul>
      {items.map(item => {
        return (
          <li key={item.name}>
            <CollectionTile {...item} />
          </li>
        );
      })}
    </ul>
  );
}
