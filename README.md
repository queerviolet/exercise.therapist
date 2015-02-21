## Introduction ##

Therapy is expensive, and it can be challenging to find a therapist you like.
Instead of struggling to find and schedule an appointment with a human
therapist, let's make a robot therapist. What it lacks in empathy it will make
up for in logical precision and unfalteringly availability. Unlike most human
therapists—or most humans of any kind—your robot therapist will never be too
busy to see you. It will always be ready to listen and offer a hug. Except of
course that it cannot hug.

## 1. A robot is the best listener ##

Create `therapist.rb` to hold the code for your robot therapist.

Your therapist should start by reading a line of input from the user. Then,
the therapist should reply. Then the therapist should wait for the user to
say something else, then the therapist should reply to that, and on and on
forever.

Therapists only really say three or four things. Some variation of "What does
that bring up for you?", "How are you feeling in your body right now?", and
"I'm interested, tell me more." You can figure out exactly what you'd like
your therapist to be able to say.

Come up with three or four responses and have the therapist say one at
random every time the user says something.

As you test it, I think you'll find that your robot therapist is already a
better listener than many of your so-called friends.

## 2. A friendlier robot ##

It would be nice if our therapist knew our name and greeted us when we
started the program.

When the program starts, have the therapist say a greeting and ask for
your name. The therapist should store the next line of input as the
user's name.

Now, add a few responses where the therapist uses the client's name in the
response. "I think that's very insightful, Ashi."

I feel more seen already.

You'll have to figure out how to represent the user's name in the response
strings, since you won't know it until the user types it. A common strategy
is to say "I think that's very insightful, %{name}", and then use the [string formatting operator](http://ruby-doc.org//core-2.2.0/String.html#method-i-25)
to substitute the name before you print it.

## 3. A robot that truly understands you ##

To really take our therapy session to the next level, let's have the therapist
remember what you've said to it, and use that information to inform what it
tells you.

Have the therapist keep a running count of how many times you've said each
word. For example, if I say "I'm feeling creatively frustrated in my life" and "I just
don't know what I'm doing with my life", the therapist's internal map of
counts should look like this:

    {
      "I'm" => 3,
      "feeling" => 1,
      "creatively" => 1,
      "frustrated" => 1,
      "I" => 1,
      "just" => 1,
      "don't" => 1,
      "know" => 1,
      "what" => 1,
      "doing" => 1,
      "with" => 1,
      "my" => 2,
      "life" => 2
    }

Then, give the therapist another response type, where it looks at this map and
finds any words that you've said three or more times, and says something like,
"It seems like %{word} is coming up for you a lot. How do you feel when you see '%{word}'?"

You might want to ignore very common English words for this part. ("It seems
like "the" is coming up for you a lot...")

What's the right data structure to use to store this? How will you need to
access that structure to find words that have been said more than a threshold
number of times? You will likely find the [Hash documentation](http://ruby-doc.org//core-2.2.0/Hash.html) useful.

## 4. Reflect and refactor your code ##

How does your code look? If I asked you to add a hundred new responses to the
therapist's repertoire, would it be easy to do? If not, how might you refactor
your code so that it would be?

