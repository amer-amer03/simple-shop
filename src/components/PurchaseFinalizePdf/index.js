import { Page, Text, Image, Document } from "@react-pdf/renderer";
import BaseTypography from "../BaseTypography";

const PurchaseFinalizePdf = ({ cartData, cartTotalPrice }) => {
  const CartData = () => {
    return (
      <div>
        {cartData.map((cartItem) => {
          return (
            <div key={cartItem.id}>
              <div>{`${cartItem.quantity} x ${cartItem.title} - ${cartItem.priceSale}₴`}</div>
              {cartItem.specs.map((spec) => {
                return (
                  spec.checked && (
                    <div
                      key={spec.title}
                    >{`+ ${spec.title} - ${spec.price}₴`}</div>
                  )
                );
              })}
            </div>
          );
        })}
        <hr />
        <div>
          <BaseTypography value={`Your total is - ${cartTotalPrice}`} />
        </div>
      </div>
    );
  };

  return (
    <Document>
      <Page>
        <Text children={<CartData />} />
        <Image src="https://marketplace.canva.com/EAEaIMAz-WI/2/0/1600w/canva-beige-minimal-thank-you-card-jOZOzZod2TE.jpg"></Image>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
          dolorem hic sit ullam illum impedit sunt ea laudantium cum incidunt
          reiciendis similique recusandae accusantium ipsa, veritatis, quas aut
          voluptatum voluptas.
        </Text>
      </Page>
    </Document>
  );
};
export default PurchaseFinalizePdf;
