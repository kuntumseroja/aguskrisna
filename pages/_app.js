import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className="border-b p-6">
        <p className="text-4xl font-bold">Material Marketplace</p>
        <div className="flex mt-4">
          <Link href="/"> 
          <Link legacyBehavior className="mr-4 text-pink-500">
              Home
              </Link>
          </Link>
          <Link href="/create-nft">
          <Link legacyBehavior className="mr-6 text-pink-500">
             Issue NFT
              </Link>
          </Link>
          <Link href="/my-nfts">
          <Link legacyBehavior className="mr-6 text-pink-500">
              My NFTs
              </Link>
          </Link>
          <Link href="/dashboard">
          <Link legacyBehavior className="mr-6 text-pink-500">
              Dashboard
            </Link>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp