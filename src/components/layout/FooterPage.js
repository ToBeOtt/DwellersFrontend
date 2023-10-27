import '../../styles.css';

export default function FooterPage() {
  
      return (   
      <>
        <div className=" from-[#3A517F]
                            bg-gradient-to-r from-10% via-[#1C3A50] via-600% to-[#0A214F] to-90%
                            border-t-2 border-stone-700">
            <div className="xl:grid grid-cols-5 w-full h-[50vh] py-16">
                <>
                <div className="xl:col-span-2 w-full px-16 w-[65%]">
                    <div className="font-titleFont">
                        <h1 className="text-xl">Sitemap</h1>
                    </div>
                    <div className="my-2 grid grid-cols-2">
                        <div className="col-span-1">
                            <h4 className="font-titleFont font-semibold text-sm">Hushåll</h4>
                            <ul className="font-contentFont font-thin text-sm my-1">
                                <ol>Index</ol>
                                <ol>Kalender</ol>
                                <ol>Chat</ol>
                                <ol>Anteckningar</ol>
                            </ul>
                        </div>
                        <div className="col-span-1">
                            <h4 className="font-titleFont font-semibold text-sm">Grannskap</h4>
                            <ul className="font-contentFont font-thin text-sm my-1">
                                <ol>Se dina grannar</ol>
                                <ol>Sök grannar</ol>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 w-full space-x-6">
                    
                <div className="flex justify-center font-contentFont">
                    <h1 className="font-logoText text-zinc-500 text-5xl tracking-wider">dwellers</h1>
                </div>
                <div className="flex justify-center mt-2">
                    <p className="font-titleFont text-zinc-400">Kontakt</p>
                </div>
                </div>

                <div className="xl:col-span-2 w-full flex justify-center space-x-6">
                    <p>Sitemap etc</p>
                </div>
                </>
            </div>
        </div>
      </>
      )
  }