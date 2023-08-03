import Header from '@/components/Header'
import Body from '@/components/Body'
import Footer from '@/components/Footer'


export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col w-full"
    >
     <Header />
     <Body />
     <Footer />
    </main>
  )
}
