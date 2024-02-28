export default function Footer(props) {
  return (
    <footer className="mt-auto">
      <div className="flex items-center h-12 text-1xl pt-8 pb-8 pl-4 bg-green-500">
        <p>{props.reports.length} Locations World Wide</p>
        {/* <p>&copy; { new Date().getFullYear()}</p> */}
      </div>
    </footer>
  );
}