import logo from '@/app/images/cafelogo.png';

const Navbar = () => {
  return (
    <header className="navbar-head border-b shadow-2xl sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 opacity-50 rounded-full"></div>
              <div className="relative rounded-2xl ">
                <img src={logo} alt="Cafeogo" className="logo" />
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-light text-white tracking-tight flex items-center gap-2">
                Bunny Café
                <span className="text-green-leafs">Analytics</span>
              </h1>
              <p className="text-sm text-green-leafs/70 tracking-wide">Dashboard</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-green-leafs/70 uppercase tracking-wider">Last Updated</p>
            <p className="text-white font-light">{new Date().toLocaleDateString().split('/').reverse().join('-')}</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar