<<<<<<< Updated upstream
import { Form, Row, Col, Alert } from 'react-bootstrap';
=======
import { Form, Alert } from 'react-bootstrap';
>>>>>>> Stashed changes
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import useCategories from '../../hooks/useCategories';
import useDrinks from '../../hooks/useDrinks';
<<<<<<< Updated upstream
=======
import { StyledRow, StyledCol, StyledButton, StyledFormSelect, StyledFormControl, StyledFormLabel} from './SearchFormStyle.js'
>>>>>>> Stashed changes

export default function SearchForm() {
    const { categories } = useCategories();
    const { getDrink, loading} = useDrinks();
    
    const initialValues = {
        name: "",
        category: "",
    }
    const validationSchema = Yup.object({
        name: Yup.string().required("El campo nombre es obligatorio."),
        category: Yup.string().required("Selecciona una categoria.")
    })
    const handleSubmit = (values => {
        getDrink(values)
    })

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {
                (formik) => (
                    <Form onSubmit={formik.handleSubmit}>
                        {
                            formik.status && (
                                <Alert variant="danger" className="text-danger">
                                    {formik.status}
                                </Alert>
                            )
                        }
<<<<<<< Updated upstream
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor='name'>Nombre Bebiba</Form.Label>
=======
                        <StyledRow>
                            <StyledCol md={6}>
                                <Form.Group className="mb-3">
                                    <StyledFormLabel><strong> Nombre de bebida</strong></StyledFormLabel>
>>>>>>> Stashed changes
                                    <Field
                                        id="name"
                                        type="text"
                                        placeholder="Ej: Tequila, Vodka, etc."
                                        name="name"
<<<<<<< Updated upstream
                                        as={Form.Control}
=======
                                        as={StyledFormControl}
>>>>>>> Stashed changes
                                    />
                                    <ErrorMessage
                                        name="name"
                                        component={Form.Text}
                                        className="text-danger"
                                    />
                                </Form.Group>
<<<<<<< Updated upstream
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor='category'>Categoria Bebida</Form.Label>
=======
                            </StyledCol>
                            <StyledCol md={6}>
                                <Form.Group className="mb-3">
                                    <StyledFormLabel><strong > Categoria Bebida</strong></StyledFormLabel>
>>>>>>> Stashed changes
                                    <Field
                                        id="category"
                                        placeholder="- Selecciona una categoria -"
                                        name="category"
<<<<<<< Updated upstream
                                        as={Form.Select}
=======
                                        as={StyledFormSelect}
>>>>>>> Stashed changes
                                    >
                                        <option>- Selecciona una categoria -</option>
                                        {
                                            categories.map(( category ) => {
                                                return(
                                                    <option 
                                                    key={category.strCategory}
                                                    value={category.strCategory}
                                                >
                                                    {category.strCategory}
                                                </option>

                                                )

                                            })
                                        }

                                    </Field>
                                    <ErrorMessage
                                        name="category"
                                        component={Form.Text}
                                        className="text-danger"
                                    />
                                </Form.Group>
<<<<<<< Updated upstream
                            </Col>
                        </Row>
                        <Row className="justify-content-end">
                            <Col md={3}>
                                <button
=======
                            </StyledCol>
                        </StyledRow>
                        <StyledRow className="justify-content-end">
                            <StyledCol md={3}>
                                <StyledButton
>>>>>>> Stashed changes
                                    className={"btn btn-secondary text-uppercase w-100"}
                                    type="submit"
                                    disabled={loading}
                                >
                                    {loading ? "Buscando..." : "Buscar Bebidas"}
<<<<<<< Updated upstream
                                </button>
                            </Col>
                        </Row>
=======
                                </StyledButton>
                            </StyledCol>
                        </StyledRow>
>>>>>>> Stashed changes
                    </Form>
                )
            }
        </Formik>
    )

}