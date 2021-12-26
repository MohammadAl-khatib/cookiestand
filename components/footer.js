function Footer(props) {
    return (
        <footer className="flex justify-between bg-emerald-400 py-4  mt-24">
        <p className="font-medium m-auto text-xl">{props.location.length} Locations World Wide</p>
      </footer>
    )
}

export default Footer
