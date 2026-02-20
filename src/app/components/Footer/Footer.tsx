

const Footer = () => {
  return (
    <footer className="navbar-footer border-t border-emerald-500/20 mt-16 py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <p className="text-sm text-green-leafs">© {new Date().getFullYear()} Bunny Café. All rights reserved.</p>
        </div>
        <p className="text-xs text-green-footer">Forest Fresh Intelligence • Data updated in real-time</p>
      </div>
    </footer>
  )
}

export default Footer