import type { FunctionComponent } from "react";
import { useState } from "react";
import Confetti from "react-confetti";
import { APP_NAME } from "../../constants.ts";
import { Button } from "../../design-system";

export const Waitlist: FunctionComponent = () => {
  const [email, setEmail] = useState<string>();
  const [accessRequested, setAccessRequested] = useState<boolean>(false);

  const emailRegex = new RegExp(".+@.+\\..+");
  const isValidEmail = emailRegex.test(email ?? "");

  const requestAccess = async () => {
    setAccessRequested(false);

    const response = await fetch("https://api.semiprose.syzible.com/waitlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    setAccessRequested(response.ok);
  };

  return (
    <>
      {accessRequested ? (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      ) : null}
      <div className={"sm:min-h-screen w-screen"}>
        <div className={"flex flex-col sm:flex-row h-full"}>
          <div
            className={
              "flex flex-col sm:min-h-screen sm:flex-1 bg-purple-300 justify-between"
            }
          >
            <div />
            <div className={"self-center px-4 pt-4"}>
              <img src={"/opinions.svg"} alt={"Inspiration"} width={256} />
            </div>
          </div>

          <div className={"flex flex-[2] items-center m-8"}>
            <div className={"flex flex-col gap-4 max-w-screen-md"}>
              <h1 className={"font-medium text-4xl"}>Join the waitlist</h1>

              <p className={"leading-relaxed"}>
                Ignite your writing superpowers with {APP_NAME}. We're currently
                in closed beta, but you can join the waitlist to get early
                access.
              </p>

              <div className={"flex flex-col sm:flex-row gap-4"}>
                <input
                  type={"email"}
                  className={"border border-gray-200 rounded-xl p-4 flex-1"}
                  placeholder={"Your email"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                  disabled={!isValidEmail || accessRequested}
                  label={"Get access"}
                  onClick={requestAccess}
                />
              </div>

              <div>
                {accessRequested ? (
                  <p>{"You've been added successfully!"}</p>
                ) : null}
              </div>

              <h2 className={"font-medium text-2xl"}>
                Why you'll love {APP_NAME}
              </h2>

              <ul className={"flex flex-col gap-4"}>
                <li className={"flex flex-col gap-1"}>
                  <h3>✏️ Weekly Short Story Challenges</h3>
                  <p className={"leading-relaxed"}>
                    Embark on a creative journey with our dynamic weekly writing
                    challenges. Engage with the community, explore different
                    genres, and refine your storytelling skills week after week.
                  </p>
                </li>
                <li className={"flex flex-col gap-1"}>
                  <h3>📚 Immersive Community Experience</h3>
                  <p className={"leading-relaxed"}>
                    Express your appreciation with a variety of reactions,
                    fostering a supportive and interactive community of
                    passionate readers and writers.
                  </p>
                </li>
                <li className={"flex flex-col gap-1"}>
                  <h3>✨ Tailored Insights for Mastery</h3>
                  <p className={"leading-relaxed"}>
                    Refine your craft with AI Writing Analysis. Receive
                    personalized insights into your writing style, allowing you
                    to pinpoint strengths, identify areas for improvement, and
                    receive actionable recommendations.
                  </p>
                </li>
                <li className={"flex flex-col gap-1"}>
                  <h3>🌐 Global Collaboration</h3>
                  <p className={"leading-relaxed"}>
                    Connect with writers from around the world. {APP_NAME} is a
                    global platform that transcends boundaries, providing you
                    with the opportunity to collaborate, learn, and share
                    cultural nuances in storytelling.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
