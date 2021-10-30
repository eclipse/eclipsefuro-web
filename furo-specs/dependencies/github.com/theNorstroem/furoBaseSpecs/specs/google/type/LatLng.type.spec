name: LatLng
type: LatLng
description: |-
    An object representing a latitude/longitude pair. This is expressed as a pair
     of doubles representing degrees latitude and degrees longitude. Unless
     specified otherwise, this must conform to the
     <a href="http://www.unoosa.org/pdf/icg/2012/template/WGS_84.pdf">WGS84
     standard</a>. Values must be within normalized ranges.

     Example of normalization code in Python:

         def NormalizeLongitude(longitude):
           """Wraps decimal degrees longitude to [-180.0, 180.0]."""
           q, r = divmod(longitude, 360.0)
           if r > 180.0 or (r == 180.0 and q <= -1.0):
             return r - 360.0
           return r

         def NormalizeLatLng(latitude, longitude):
           """Wraps decimal degrees latitude and longitude to
           [-90.0, 90.0] and [-180.0, 180.0], respectively."""
           r = latitude % 360.0
           if r <= 90.0:
             return r, NormalizeLongitude(longitude)
           elif r >= 270.0:
             return r - 360, NormalizeLongitude(longitude)
           else:
             return 180 - r, NormalizeLongitude(longitude + 180.0)

         assert 180.0 == NormalizeLongitude(180.0)
         assert -180.0 == NormalizeLongitude(-180.0)
         assert -179.0 == NormalizeLongitude(181.0)
         assert (0.0, 0.0) == NormalizeLatLng(360.0, 0.0)
         assert (0.0, 0.0) == NormalizeLatLng(-360.0, 0.0)
         assert (85.0, 180.0) == NormalizeLatLng(95.0, 0.0)
         assert (-85.0, -170.0) == NormalizeLatLng(-95.0, 10.0)
         assert (90.0, 10.0) == NormalizeLatLng(90.0, 10.0)
         assert (-90.0, -10.0) == NormalizeLatLng(-90.0, -10.0)
         assert (0.0, -170.0) == NormalizeLatLng(-180.0, 10.0)
         assert (0.0, -170.0) == NormalizeLatLng(180.0, 10.0)
         assert (-90.0, 10.0) == NormalizeLatLng(270.0, 10.0)
         assert (90.0, 10.0) == NormalizeLatLng(-270.0, 10.0)
__proto:
    package: google.type
    targetfile: latlng.proto
    imports: []
    options:
        go_package: google.golang.org/genproto/googleapis/type/latlng;latlng
        java_multiple_files: "true"
        java_outer_classname: LatLngProto
        java_package: com.google.type
        objc_class_prefix: GTP
fields:
    latitude:
        type: double
        description: The latitude in degrees. It must be in the range [-90.0, +90.0].
        __proto:
            number: 1
            oneof: ""
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            hint: ""
            label: label.LatLng.latitude
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    longitude:
        type: double
        description: The longitude in degrees. It must be in the range [-180.0, +180.0].
        __proto:
            number: 2
            oneof: ""
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            hint: ""
            label: label.LatLng.longitude
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
