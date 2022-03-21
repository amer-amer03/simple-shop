import { Page, Text, Image, Document } from "@react-pdf/renderer"

const BasePdf = () => {


    return (
        <Document>
            <Page >
                <Text>Your Purchase is being processed</Text>
                <Image src='https://marketplace.canva.com/EAEaIMAz-WI/2/0/1600w/canva-beige-minimal-thank-you-card-jOZOzZod2TE.jpg'></Image>
                <Text> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae dolorem hic sit ullam illum impedit sunt ea laudantium cum incidunt reiciendis similique recusandae accusantium ipsa, veritatis, quas aut voluptatum voluptas.</Text>
            </Page>
        </Document>
    )
}
export default BasePdf