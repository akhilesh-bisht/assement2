import React, { useState } from "react";
import LeftNav from "./components/LeftNav";
import TopNavbar from "./components/TopNavbar";
import Container from "./components/Container";
import SampleRowData from "./components/data";
import Footer from "./components/Footer";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex w-full h-screen mx-auto mt-4 rounded">
      <LeftNav />
      <div className="w-[88%] md:w-[79%] flex flex-col">
        <TopNavbar setSearchTerm={setSearchTerm} />
        <div className="h-full flex-grow">
          <Container rowData={SampleRowData} searchTerm={searchTerm} />
        </div>
        <div className="flex justify-center">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default App;
