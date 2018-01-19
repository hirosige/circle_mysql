class InquiryMailer < ApplicationMailer

  def receive_email(inquiry)

    mail(
        to:      inquiry.email,
        subject: 'Test from Message',
    ) do |format|
      format.html
    end
  end
end
