mocha.setup('bdd');
var expect = chai.expect;


describe("BinaryTreeDepth search : ", function() {
  let root;
  beforeEach(function() {
    root = new TreeNode(1)
    root.left = new TreeNode(2)
    root.left.left = new TreeNode(4)
    root.right = new TreeNode(3)
    root.right.right = new TreeNode(5);
    root.right.right.left = new TreeNode(7)
    root.right.right.left.right = new TreeNode(9)
  })

  it("exists", function() {
    expect(BinaryTreeDepth).to.be.a('function');
  });

  it('returns a number', function() {
    var result = BinaryTreeDepth(root)
    expect(result).to.be.a('Number')
  })

  it('returns the correct value', () => {
    var result = BinaryTreeDepth(root)
    expect(result).to.equal(4)
  })

})