import Container from "../components/Layout/Container";
import QR from "../assets/images/qr.png";
import Box from "../components/Layout/Box";

function Header() {
  return (
    <Container className="flex md:justify-center md:items-center bg-gray-300 w-full h-screen">
      <Box className="flex items-center justify-center w-[1200px] h-[500px] rounded-xl">
        <div className="bg-slate-100 h-[400px] w-[250px] p-4 rounded-xl flex-col justify-center text-center ">
          <div className="bg-blue-500 h-[220px] w-[220px]  flex items-center justify-center  ">
            <img src={QR} className="w-48 " />{" "}
          </div>
          <p className="font-bold  p-2">
            {" "}
            Improvise your front-end skills by building projects
          </p>
          <p className="font-light">
            {" "}
            Scan the QR code to visit my Instagram page and follow me.{" "}
          </p>
        </div>
      </Box>
    </Container>
  );
}

export default Header;
