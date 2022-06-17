import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

//spies - espiões
const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback  = new SubmitFeedbackUseCase(
  {create: createFeedbackSpy },
  {sendMail: sendMailSpy },
  )

 /*  const submitFeedback  = new SubmitFeedbackUseCase(
    {create: async () => {} },
    {sendMail: async () => {} },
    ) */

describe('Submit feedback', () => {
   it('should be able to submit a feedback', async () => {
      await expect(submitFeedback.execute({
        type: 'BUG',
        comment: 'example comment',
        screenshot: 'data:image/png;base64, sfgsjfasfgajhg',
      })).resolves.not.toThrow();

      expect(createFeedbackSpy).toHaveBeenCalled();
      expect(sendMailSpy).toHaveBeenCalled();
    });
  

    it('should not be able to submit a feedback without type', async () => {
        await expect(submitFeedback.execute({
        type: '',
        comment: 'exemple comment',
        screenshot: 'data:image/png;base64, sfgsjfasfgajhg',
      })).rejects.toThrow();
    });

    it('should be able to submit a feedback without comment', async () => {
      await expect(submitFeedback.execute({
      type: 'BUG',
      comment: '',
      screenshot: 'data:image/png;base64, sfgsjfasfgajhg',
    })).rejects.toThrow();
  });

  it('should be able to submit a feedback with an invalid screenshot', async () => {
    await expect(submitFeedback.execute({
    type: 'BUG',
    comment: 'Esta tudo bugado mesmo!!',
    screenshot: '123',
  })).rejects.toThrow();
});

});

/* test('sum 2 + 2', () => {
 expect(2 + 2).toBe(4)
}); */