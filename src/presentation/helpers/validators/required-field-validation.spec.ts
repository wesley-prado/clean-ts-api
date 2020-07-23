import { RequiredFieldValidation } from './required-field-validation'
import { MissingParamError } from '../../errors'

describe('RequiredField Validation', () => {
  test('should return a MissinParamError if a validation fails', () => {
    const sut = new RequiredFieldValidation('field')
    const error = sut.validate({ name: 'any_name' })
    expect(error).toEqual(new MissingParamError('field'))
  })
})
