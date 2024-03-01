export default function Footer({locations}) {
  return (
    <footer className="mt-auto">
       <div className="flex items-center h-12 text-1xl pt-8 pb-8 pl-4 bg-green-500">
          <p>{locations.length} Locations World Wide</p>
      </div>
    </footer>
  );
}