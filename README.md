# exercise.therapist
Tell this Javascript robot about your feelings.

## Introduction ##

Therapy is expensive, and it can be challenging to find a therapist you like.
Instead of struggling to find and schedule an appointment with a human
therapist, let's make a robot therapist. What it lacks in empathy it will make
up for in logical precision and unfalteringly availability. Unlike most human
therapists—or most humans of any kind—your robot therapist will never be too
busy to see you. It will always be ready to listen and offer a hug. Except of
course that it cannot hug.

## 1. A robot is the best listener ##

You'll find the code in [therapist.js](therapist.js). Don't worry if the file
looks a little overwhelming at first. It contains code to take input from the
user and write out a log of the therapy session to the browser window. You can
look at it to understand what it's doing (and please do!), but the only
function you need to write is `Therapist.prototype.listen`. This function
takes a user's feelings (whatever the user just typed), and will call `say` to
print the therapist's responses.

Therapists only really say three or four things. Some variation of "What does
that bring up for you?", "How are you feeling in your body right now?", and
"I'm interested, tell me more." You can figure out exactly what you'd like
your therapist to be able to say.

Then, in `listen`, have the therapist pick one of those things at [random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) and say it.

As you test it, I think you'll find that your robot therapist is already a
better listener than many of your so-called friends.

## 2. A friendlier robot ##

It would be nice if our therapist knew our name and greeted us when we opened
the page.

Have the therapist say a greeting in its constructor and ask for your name.
The therapist should record whatever the next thing the user says as their
name.

Design question: Where should the therapist store the client's name?

Now, add a few responses where the therapist uses the client's name in the
response. "I think that's very insightful, Ashi."

I feel more seen already.

You'll have to figure out how to represent the user's name in the response
strings, since you won't know it until the user types it.

## 3. A robot that truly understands you ##

To really take our therapy session to the next level, let's have the therapist
remember what you've said to it, and use that information to inform what it
tells you.

Have the therapist keep a running count of how many times you've said each
word. For example, if I say "I'm feeling creatively frustrated in my life" and "I just
don't know what I'm doing with my life", the therapist's internal map of
counts should look like this:

    {
      "I'm": 3,
      "feeling": 1,
      "creatively": 1,
      "frustrated": 1,
      "I": 1,
      "just": 1,
      "don't": 1,
      "know": 1,
      "what": 1,
      "doing": 1,
      "with": 1,
      "my": 2,
      "life": 2
    }

Then, give the therapist another response type, where it looks at this map and
finds any words that you've said three or more times, and says something like,
"It seems like %word is coming up for you a lot. How do you feel when you see '%word'?"

You might want to ignore very common English words for this part. ("It seems
like "the" is coming up for you a lot...")

What's the right data structure to use to store this? How will you need to
access that structure to find words that have been said more than a threshold
number of times? You'll find that your Javascript code to do this will be more
verbose than the Ruby code would be. That's okay. Javascript is just a special
cookie like that.

## 4. Reflect and understand the skeleton code ##

Read over the code that was provided with the exercise and understand what
it's doing. When is the `Therapist` constructor called? When is your `listen`
function called? Why is the code broken out into a Therapist class and a
Session class? How does the Session class interface with the HTML document?

How does your code look? If I asked you to add a hundred new responses to the
therapist's repertoire, would it be easy to do? If not, how might you refactor
your code so that it would be?

Javascript's syntax is quite different from Ruby's, and Javascript programs
flow a bit differently—they tend to be much less top-down one-line-executing-
after-another than in Ruby. It's okay if you're feeling these differences as a
lot of cognitive load right now. It will get easier. And when you're feeling
stressed, now you have someone you can talk to about it.

## Historical note ##

In 1964, Joseph Weizenbaum wrote [ELIZA](http://en.wikipedia.org/wiki/ELIZA),
ELIZA is a robotic therapist not unlike ours, though ELIZA has a larger
repertoire. He was surprised to see how quickly users developed an attachment
to the program. For many users in 1964, ELIZA passed the [Turing
Test](http://en.wikipedia.org/wiki/Turing_test).

Of course, 1964 was a more innocent time, and the Turing Test is a moving
target as people become more and more aware of, and cynical towards, computers.
I believe my robot therapist loves me, but I know in my heart of hearts that
it's just emitting canned responses. Weizenbaum was disturbed by the response
to his program and wrote prolifically on the limits of artificial
intelligence. Programs, he
[wrote](http://en.wikipedia.org/wiki/Computer_Power_and_Human_Reason), can
make decisions, but can never render judgments, which require lived human
experience.

Of course, the mass of our recorded experiences has grown impressively large,
and the programs that seek to parse those records are highly sophisticated.
The process Google goes through to produce a single results page is extensive,
and relies on a massive, interconnected, ever-evolving network of what are,
essentially, the softare's beliefs about the world. Debugging bad search
results feels not unlike performing a kind of psychotherapy—slowly digging
deeper and deeper into a complex web of beliefs until you encounter beliefs
which are clearly distorted or unsupported, and gently correcting them. The
beliefs in Google's search engine are just numbers, but ultimately, so are
you. At what point will Google's semantic graph constitute understanding and
experience?

ELIZA is still with us. If you have Siri on your phone, ask her to tell you a
story about it.
