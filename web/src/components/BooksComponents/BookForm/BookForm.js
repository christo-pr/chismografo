import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/web'

const CSS = {
  label: '',
  labelError: 'block mt-6 font-semibold text-red-700',
  input: 'uk-input',
  inputError: 'uk-form-danger',
  errorMessage: 'block mt-1 font-semibold uppercase text-xs text-red-700',
}

const BookForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.book?.id)
  }

  return (
    <div className="uk-flex uk-flex-center">
      <div className="uk-width-5-6">
        <Form onSubmit={onSubmit} error={props.error}>
          <FormError
            error={props.error}
            wrapperClassName="p-4 bg-red-100 text-red-700 border border-red-300 rounded mb-4"
            titleClassName="font-semibold"
            listClassName="mt-2 list-disc list-inside"
          />

          <Label
            name="Empezemos por tu nombre:"
            className={CSS.label}
            errorClassName={CSS.labelError}
          />
          <TextField
            name="owner"
            defaultValue={props.book?.owner}
            placeholder="Escribe tu nombre"
            className={CSS.input}
            errorClassName={CSS.inputError}
            validation={{ required: true }}
          />
          <FieldError name="owner" className={CSS.errorMessage} />

          <div className="uk-margin-top uk-flex uk-flex-center">
            <Submit
              disabled={props.loading}
              className="uk-button uk-button-primary"
            >
              Save
            </Submit>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default BookForm
