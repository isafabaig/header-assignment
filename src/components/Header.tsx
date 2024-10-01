import Link from "next/link"
export default function Header() {
  return(
    <div className="header">

        <ul className="header-button">
           <li><Link href= "/">Home</Link></li>
          <li><Link href="/about">About us</Link></li>
         <li><Link href="/contact-us"> Contact us</Link></li>
         <li><Link href="/portfolio">Portfolio </Link></li>

        </ul>
      </div>
  )
}
