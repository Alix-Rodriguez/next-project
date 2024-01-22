import Link from "next/link";
import { map } from "lodash";
import { fn } from "@/utils";
import { Label } from "@/components/Shared";
import styles from "./GridGames.module.scss";

export function GridGames(props) {
  const { games } = props;


  return (
    <div className={styles.gridGames}>
      {games?.map((game) => (
        <Link
          key={game.id}
          href={`/${game.slug}`}
          className={styles.game}
        >
          <div>
            <img src={game.cover_url} />
            {game.discount > 0 && (
              <Label.Discount className={styles.discount}>
                {`-${game.discount}%`}
              </Label.Discount>
            )}
          </div>

          <div>
            <span>{game.title}</span>
            <span className={styles.price}>
              {fn.calcDiscountedPrice(
                game.price,
                game.discount
              )}
              $
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
