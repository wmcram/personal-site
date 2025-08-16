# A message queue built on top of Kubernetes CRDs

After my internship, I wanted an excuse to play around with Kubernetes a bit more, specifically
writing some kind of controller. I then had the horrible idea of implementing a basic message queue
service using nothing but a Kubernetes [CRD](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/). Given that the kube-apiserver isn't really built for super high-volume production and consumption
of events, I wasn't expecting this to be super performant, but let's see just how far we can go with the idea.
