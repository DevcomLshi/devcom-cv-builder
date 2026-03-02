
import { Button } from './ui/button'

export default function HeroSection() {
  return (
    <section className="hero">
      <p className="eyebrow">DevCom CV Builder</p>
      <h1>Creer un CV simple, propre et rapide.</h1>
      <p className="lede">
        Une base front React prete pour brancher Firebase ensuite.
      </p>
      <div className="actions">
        <Button variant='default' size='sm'>
          Commencer
        </Button>
      </div>
    </section>
  )
}
