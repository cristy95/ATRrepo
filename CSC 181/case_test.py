from Hero import hero
import unittest

class ArithTest(unittest.TestCase):
  def runTest(self):
    self.failUnless(hero("August","27","Purple") == "Your hero name is: The Ugly Orc of the East","Semantic Fail")

def suite():
  suite_=unittest.TestSuite()
  suite_.addTest(ArithTest())
  return suite_

runner = unittest.TextTestRunner()
test_suite = suite()
runner.run(test_suite)   
