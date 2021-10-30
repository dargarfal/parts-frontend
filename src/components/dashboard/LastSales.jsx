import React, { useContext, useState, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Avatar from "@material-ui/core/Avatar";
import Fade from "@material-ui/core/Fade";

//Context
import brandContext from "../../context/brands/brandContext";
import saleContext from "../../context/sales/saleContext";

function LastSales() {
  const salesContext = useContext(saleContext);
  const { sales } = salesContext;

  const [lasts, setLasts] = useState(
    sales.slice(sales.length - 3, sales.length)
  );

  useEffect(() => {
    console.log(sales.length);

    if (sales.length <= 3) {
      setLasts(sales);
    }
  }, []);

  const brandsContext = useContext(brandContext);
  const { brands } = brandsContext;

  const getBrand = (id) => brands.find((element) => element._id === id);

  return (
    <div>
      <Fade in={true}>
      <TableContainer>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Marca</TableCell>
              <TableCell>Pieza</TableCell>
              <TableCell>Monto</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {lasts.map((last) => (
              <TableRow>
                <TableCell>
                  <Avatar
                    src={getBrand(last.ownercarSale.brandCar).logoBrand}
                  />
                </TableCell>
                <TableCell>
                  {getBrand(last.ownercarSale.brandCar).nameBrand}
                </TableCell>

                <TableCell>{last.ownerpartSale.namePart}</TableCell>
                <TableCell>{last.ownerpartSale.realsalepricePart}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Fade>
    </div>
  );
}

export default LastSales;
