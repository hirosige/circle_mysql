require "rails_helper"

RSpec.describe V1::InquiriesController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/v1/inquiries").to route_to("v1/inquiries#index")
    end


    it "routes to #show" do
      expect(:get => "/v1/inquiries/1").to route_to("v1/inquiries#show", :id => "1")
    end


    it "routes to #create" do
      expect(:post => "/v1/inquiries").to route_to("v1/inquiries#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/v1/inquiries/1").to route_to("v1/inquiries#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/v1/inquiries/1").to route_to("v1/inquiries#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/v1/inquiries/1").to route_to("v1/inquiries#destroy", :id => "1")
    end

  end
end
