import { BasicLayout } from "@/layouts";
import { Game } from "@/components/Game";
import { Separator, Seo } from "@/components/Shared";

export default function GamePage(props) {
  const { game } = props;
  const wallpaper = game.games.wallpaper_url;

  return (
    <>
      <Seo
        title={game.games.title}
        description={game.games.summary}
      />

      <BasicLayout>
        <Game.HeaderWallpaper image={wallpaper} />
        <Game.Panel gameId={game.games.id} game={game.games} />

        <Separator height={50} />

        <Game.Info game={game.games} />

        <Separator height={30} />

        <Game.Media
          video={game.games.video}
          screenshots={game.games.screenshots_url}
        />

        <Separator height={50} />
      </BasicLayout>
    </>
  );
}
