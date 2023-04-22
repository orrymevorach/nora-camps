import Wrapper from "@/components/shared/wrapper/wrapper";
import CollectionTile from "../collection-tile";

export default function CollectionsGallery({ items = [] }) {
  return (
    <Wrapper>
      <ul>
        {items.map(item => {
          return (
            <li key={item.name}>
              <CollectionTile {...item} />
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
}
