workflow "Jest" {
  on = "push"
  resolves = ["Jest"]
}

action "Jest" {
  uses = "stefanoeb/jest-action@master"
}