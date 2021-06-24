import React from "react";
import { Formik, Form,Field,ErrorMessage } from "formik";
import * as Yup from "yup";
import { FormField, Button,Label} from "semantic-ui-react";
import KodlamaIoTextInput from "../utilities/customFormControls/KodlamaIoTextInput";

export default function ProductAdd() {
    const initialValues = { productName: " ", unitPrice: 10 };
    const schema = Yup.object({
        productName: Yup.string().required("Product name is mandatory!"),
        unitPrice: Yup.number().required("The product price is mandatory!"),
    });

    return (
        <div>
            <Formik initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    console.log(values)
                }}>
                <Form className="ui form">
                    <KodlamaIoTextInput name="productName" placeholder="Product Name" />
                    <KodlamaIoTextInput name="unitPrice" placeholder="Product Price" />
                    {/* <FormField>
                <Field name="productName" placeholder="Product Name" ></Field>
                <ErrorMessage name="productName" render={error=>
                    <Label pointing basic color="red" content={error}></Label>
                }></ErrorMessage>
            </FormField> */}
                    {/* <FormField>
            <Field name="unitPrice" placeholder="Product Price" ></Field>
            <ErrorMessage name="unitPrice" render={error=>
                    <Label pointing basic color="red" content={error}></Label>
                }></ErrorMessage>
            </FormField> */}
                    <Button color="green" type="submit">Add</Button>
                </Form>
            </Formik>
        </div>
    );
}