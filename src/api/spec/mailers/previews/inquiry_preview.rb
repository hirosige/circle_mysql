# Preview all emails at http://localhost:3000/rails/mailers/inquiry
class InquiryPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/inquiry/new
  def new
    InquiryMailer.new
  end

end
