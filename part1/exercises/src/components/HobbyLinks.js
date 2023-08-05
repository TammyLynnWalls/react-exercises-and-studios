
let guitarLink = "https://www.justinguitar.com/classes/intermediate-guitar-course-grade-four"
let houseLink ="https://paperglitterglue.com/what-is-a-putz-house-and-how-do-you-make-one/"
let hobbyLinks = [guitarLink, houseLink];

export default function HobbyLinks() {
    return (
<div>
    <h3>My Hobbies</h3>
    <a href= {hobbyLinks[0]}>Playing Guitar</a>
    <a href= {hobbyLinks[1]}>Building Putz Houses</a>
</div>
);
}