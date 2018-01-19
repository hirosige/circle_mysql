class V1::InquiriesController < ApplicationController
  before_action :set_inquiry, only: [:show, :update, :destroy]

  # GET /v1/inquiries
  def index
    @inquiries = Inquiry.all

    render json: @inquiries
  end

  # GET /v1/inquiries/1
  def show
    render json: @inquiry
  end

  # POST /v1/inquiries
  def create
    @inquiry = Inquiry.new(inquiry_params)

    if @inquiry.save
      InquiryMailer.receive_email(@inquiry).deliver
      render json: @inquiry, status: :created, location: [:v1, @inquiry]
    else
      render json: @inquiry.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /v1/inquiries/1
  def update
    if @inquiry.update(inquiry_params)
      render json: @inquiry
    else
      render json: @inquiry.errors, status: :unprocessable_entity
    end
  end

  # DELETE /v1/inquiries/1
  def destroy
    @inquiry.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_inquiry
      @inquiry = Inquiry.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def inquiry_params
      params.require(:inquiries).permit(
          :first_name,
          :last_name,
          :email,
          :tel,
          :comp_name,
          :comp_address,
          :title,
          :description,
          :github_id,
          :status,
          :inquiry_category_id
      )
    end
end
