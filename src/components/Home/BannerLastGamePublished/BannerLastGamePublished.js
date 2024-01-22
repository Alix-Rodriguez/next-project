import { useState, useEffect } from "react";
import { Container, Image } from "semantic-ui-react";
import { DateTime } from "luxon";
import Link from "next/link";
import { Game } from "@/api";
import { Label } from "@/components/Shared";
import { fn } from "@/utils";
import styles from "./BannerLastGamePublished.module.scss";

const gameCtrl = new Game();

export function BannerLastGamePublished() {
  const [game, setGame] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await gameCtrl.getLastPublished();
        setGame(response.games[1]);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  if (!game) return null;

  const wallpaper = game.wallpaper_url;
  const price = fn.calcDiscountedPrice(
    game.price,
    game.discount
  );

  return (
    <div className={styles.container}>
      <Image src={wallpaper} className={styles.wallpaper} />

      <Link className={styles.infoContainer} href={game.slug}>
        <Container>
          <span className={styles.date}>
            {game.releaseDate}
          </span>

          <h2>{game.title}</h2>

          <p className={styles.price}>
            <Label.Discount>-{game.discount}%</Label.Discount>
            <span className={styles.finalPrice}>{price}€</span>
          </p>
        </Container>
      </Link>
    </div>
  );
}
