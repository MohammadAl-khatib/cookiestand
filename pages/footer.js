function Footer(props) {
    return (
        <footer className="flex justify-between bg-emerald-500 py-4  mt-24">
        <p className="font-bold ml-6 ">{props.location.length} Locations World Wide</p>
      </footer>
    )
}

export default Footer
