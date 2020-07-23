import { CompareFieldsValidation } from './compare-fields-validation'
import { InvalidParamError } from '../../errors'

const makeSut = (): CompareFieldsValidation => new CompareFieldsValidation('field', 'fieldToCompare')

describe('CompareFields Validation', () => {
  test('should return a InvalidParamError if a validation fails', () => {
    const sut = makeSut()
    const error = sut.validate({
      field: 'any_value',
      fieldToCompare: 'wrong_value'
    })
    expect(error).toEqual(new InvalidParamError('fieldToCompare'))
  })

  test('should not return if validation succeeds', () => {
    const sut = makeSut()
    const error = sut.validate({
      field: 'any_value',
      fieldToCompare: 'any_value'
    })
    expect(error).toBeFalsy()
  })
})
