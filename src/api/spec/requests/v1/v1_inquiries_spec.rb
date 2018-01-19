require 'rails_helper'

RSpec.describe "V1::Inquiries", type: :request do
  describe "GET /v1_inquiries" do
    it "works! (now write some real specs)" do
      get v1_inquiries_path
      expect(response).to have_http_status(200)
    end
  end
end
