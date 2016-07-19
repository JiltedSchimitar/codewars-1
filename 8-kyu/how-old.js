//How old will I be?

function  calculateAge(birth, target) {
  if (target == birth) {
    return `You were born this very year!`
  }
  else if (birth - target == 1) {
    return `You will be born in 1 year.`
  }
  else if (birth > target) {
    return `You will be born in ${birth - target} years.`
  }
  else if (target - birth == 1) {
    return `You are ${target - birth} year old.`
  }
    else if (birth < target) {
    return `You are ${target - birth} years old.`
  }
}