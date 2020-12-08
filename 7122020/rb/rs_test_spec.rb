require "re_test"

describe RsTest do
    describe ".add" do
        context "given '3,5" do
            it "returns 3,5" do
                expect(RsTest.add("3,5")).to eql(8)
            end
        end
        context "given '1000,200'" do
            it "returns 1200" do
                expect(RsTest.add("1000,200")).to eql(1200)
            end
        end
    end
end