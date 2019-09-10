workflow "Jest Runner" {
  on = "push"
  resolves = ["Jest"]
}

action "Jest" {
  uses = "stefanoeb/jest-action@master"
  args = "--experimental-modules"
}
