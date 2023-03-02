# Google Cloud for Developers: Learning the Cloud Build CI/CD Platform
This is the repository for the LinkedIn Learning course Google Cloud for Developers: Learning the Cloud Build CI/CD Platform. The full course is available from [LinkedIn Learning][lil-course-url].

![Google Cloud for Developers: Learning the Cloud Build CI/CD Platform][lil-thumbnail-url] 

The Google Cloud Platform has so many tools it’s hard to keep track. One of the most interesting but less talked about is Cloud Build—designed to offer a game-changing experience for developers. In this course, instructor Xian Ke shows you the basics of using Google Cloud Build for building, testing, deploying, and managing code on a serverless CI/CD platform.

Get an overview of how Cloud Build fits within the larger Google Cloud Platform to better understand the overall development process. Learn to package code with GitHub repos, Docker containers, and artifacts in Node.js, Java, and Python. Test your apps along the way for functionality to get them ready for successful deployment. Find out how to deploy code to the Google App Engine, Cloud Run, Kubernetes, Cloud Functions, Firebase, and more. Upon completing this course, you’ll be ready to leverage all the features of Cloud Build for building your own applications.



## Instructions
This repository has branches for each of the videos in the course. You can use the branch pop up menu in github to switch to a specific branch and take a look at the course at that stage, or you can add `/tree/BRANCH_NAME` to the URL to go to the branch you want to access.

## Branches
The branches are structured to correspond to the videos in the course. The naming convention is `CHAPTER#_MOVIE#`. As an example, the branch named `02_03` corresponds to the second chapter and the third video in that chapter. 
Some branches will have a beginning and an end state. These are marked with the letters `b` for "beginning" and `e` for "end". The `b` branch contains the code as it is at the beginning of the movie. The `e` branch contains the code as it is at the end of the movie. The `main` branch holds the final state of the code when in the course.

When switching from one exercise files branch to the next after making changes to the files, you may get a message like this:

    error: Your local changes to the following files would be overwritten by checkout:        [files]
    Please commit your changes or stash them before you switch branches.
    Aborting

To resolve this issue:
	
    Add changes to git using this command: git add .
	Commit changes using this command: git commit -m "some message"


### Instructor

Xian Ke 
                            
Technology Consultant

                            

Check out my other courses on [LinkedIn Learning](https://www.linkedin.com/learning/instructors/xian-ke).

[lil-course-url]: https://www.linkedin.com/learning/google-cloud-for-developers-learning-the-cloud-build-ci-cd-platform?dApp=59033956
[lil-thumbnail-url]: https://media.licdn.com/dms/image/C560DAQEuXwmPFez8iw/learning-public-crop_675_1200/0/1675730064836?e=2147483647&v=beta&t=7yYc6THNpsb0G5MH5yF4xN-zpqQ8eH_aa5ZznFMDIuA
