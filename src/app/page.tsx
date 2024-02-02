import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  //Variables
  const pkmnPictureStyle = {
    marginBottom: "5px",
  }

  const pokeBallStyle = {
    marginLeft: "0.5rem",
  }

  return (
    <main className={styles.description}>
      {/* Style & Type selection section */}
      <div className="lead">Use this tool to see possible matchups,organize your team and more!</div>
      <div className={styles.text_box}>
        <div className={styles.text_box_inside}>
          <div className={styles.text_box_text}>
            <p className="row">
              The TRAINER is apparently skilled in the handling of the
              <select className="form-select w-auto">
                <option value="">NO TYPE SELECTED</option>
                <option value="normal">NORMAL</option>
                <option value="fighting">FIGHTING</option>
                <option value="flying">FLYING</option>
                <option value="ground">GROUND</option>
                <option value="rock">ROCK</option>
                <option value="bug">BUG</option>
                <option value="ghost">GHOST</option>
                <option value="steel">STEEL</option>
                <option value="fire">FIRE</option>
                <option value="water">WATER</option>
                <option value="grass">GRASS</option>
                <option value="electric">ELECTRIC</option>
                <option value="psychic">PSYCHIC</option>
                <option value="ice">ICE</option>
                <option value="dragon">DRAGON</option>
                <option value="dark">DARK</option>
              </select>
              type.
            </p>

            <p className="row">
              Their favorite battle style appears to be
              <select className="form-select w-auto">
                <option value="0"> free-spirited and unrestrained</option>
                <option value="1"> one based on total preparation</option>
                <option value="2"> slow and steady</option>
                <option value="3"> one of endurance</option>
                <option value="4"> high risk, high return</option>
                <option value="5"> weakening the foe to start</option>
                <option value="6">  impossible to predict</option>
                <option value="7">depending on the battle&apos;s flow</option>
                <option value="8"> flexibly adaptable to the situation</option>
              </select>
              .
            </p>
          </div>

        </div>

      </div>
      {/* Team selection section */}
      <div className="container d-flex justify-content-around team__boxes">
        <div className={styles.pokemon_box}>
          <div className={styles.pokemon_box_inside}>
            <h4 className="card-title text-center"><b>Current Team</b></h4>
            <div className="fs-5 row">
              <div className="col-2 mb-1">
                <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/160.png" alt="pkm-160" style={pkmnPictureStyle} width={36} height={29} unoptimized />
              </div>
              <div className="col-4">Feraligatr</div>
              <div className="col">
                <Image className="mr-1" src="/resources/search.svg" alt="search" style={pokeBallStyle} width={15} height={15} unoptimized />

              </div>

            </div>
            <div className="fs-5 row">
              <div className="col-2 mb-1">
                <Image className="mr-1" src="/resources/pokeball-sprite.png" alt="pokeball" style={pokeBallStyle} width={15} height={15} unoptimized />
              </div>
              <div className="col">
                Select Pokemon
              </div>
            </div>
            <div className="fs-5 row">
              <div className="col-2 mb-1">
                <Image className="mr-1" src="/resources/pokeball-sprite.png" alt="pokeball" style={pokeBallStyle} width={15} height={15} unoptimized />
              </div>
              <div className="col">
                Select Pokemon
              </div>

            </div>
          </div>

        </div>
        <div>ronda y batalla</div>
        <div className={styles.pokemon_box}>
          <div className={styles.pokemon_box_inside}>
            <h4 className="card-title text-center"><b>Enemy Team</b></h4>
            <div className="fs-5 row">
              <div className="col-2 mb-1">
                <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/160.png" alt="pkm-160" style={pkmnPictureStyle} width={36} height={29} unoptimized />

              </div>
              <div className="col-4">Feraligatr</div>
              <div className="col">
                <Image className="mr-1" src="/resources/search.svg" alt="search" style={pokeBallStyle} width={15} height={15} unoptimized />

              </div>

            </div>
            <div className="fs-5 row">
              <div className="col-2 mb-1">
                <Image className="mr-1" src="/resources/pokeball-sprite.png" alt="pokeball" style={pokeBallStyle} width={15} height={15} unoptimized />
              </div>
              <div className="col">
                Select Pokemon
              </div>
            </div>
            <div className="fs-5 row">
              <div className="col-2 mb-1">
                <Image className="mr-1" src="/resources/pokeball-sprite.png" alt="pokeball" style={pokeBallStyle} width={15} height={15} unoptimized />
              </div>
              <div className="col">
                Select Pokemon
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
