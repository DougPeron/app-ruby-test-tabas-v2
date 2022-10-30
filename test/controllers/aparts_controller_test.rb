require "test_helper"

class ApartsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @apart = aparts(:one)
  end

  test "should get index" do
    get aparts_url, as: :json
    assert_response :success
  end

  test "should create apart" do
    assert_difference("Apart.count") do
      post aparts_url, params: { apart: { locale: @apart.locale, pic1: @apart.pic1, pic2: @apart.pic2, pic3: @apart.pic3, pic4: @apart.pic4, pic5: @apart.pic5, price: @apart.price, title: @apart.title } }, as: :json
    end

    assert_response :created
  end

  test "should show apart" do
    get apart_url(@apart), as: :json
    assert_response :success
  end

  test "should update apart" do
    patch apart_url(@apart), params: { apart: { locale: @apart.locale, pic1: @apart.pic1, pic2: @apart.pic2, pic3: @apart.pic3, pic4: @apart.pic4, pic5: @apart.pic5, price: @apart.price, title: @apart.title } }, as: :json
    assert_response :success
  end

  test "should destroy apart" do
    assert_difference("Apart.count", -1) do
      delete apart_url(@apart), as: :json
    end

    assert_response :no_content
  end
end
