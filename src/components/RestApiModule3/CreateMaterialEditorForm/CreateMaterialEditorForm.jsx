import { Formik, Form, Field } from 'formik';

const CreateMaterialEditorForm = ({ onSubmit, isSubmitng }) => {
  const hadleSubmit = (values, action) => {
    onSubmit(values);
    action.resetForm();
  };
  return (
    <Formik initialValues={{ title: '', link: '' }} onSubmit={hadleSubmit}>
      <Form>
        <div className={`mb-3`}>
          <label className="form-label">Опис</label>
          <Field name="title" type="text" className={`form-control`} />
          <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label className="form-label">Посилання</label>
          <Field name="link" type="text" className="form-control" />
        </div>

        <button type="submit" disabled={isSubmitng} className="btn btn-primary">
          Додати матеріали
        </button>
      </Form>
    </Formik>
  );
};

export { CreateMaterialEditorForm };
